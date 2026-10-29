import { useEffect, useState } from 'react';
import { DownloadLinks, RELEASE_CONFIG } from '../config/releaseConfig';

export type VisitorOS = 'windows' | 'macos';

export interface SnagixReleaseState {
  version: string;
  publishedDate: string;
  detectedOS: VisitorOS;
  links: DownloadLinks;
}

function detectVisitorOS(): VisitorOS {
  if (typeof navigator === 'undefined') return 'windows';
  const ua = navigator.userAgent.toLowerCase();
  const platform = (navigator.platform || '').toLowerCase();
  if (ua.includes('mac') || platform.includes('mac')) {
    return 'macos';
  }
  return 'windows';
}

export function useSnagixRelease(): SnagixReleaseState {
  const [detectedOS] = useState<VisitorOS>(() => detectVisitorOS());
  const [version, setVersion] = useState<string>(RELEASE_CONFIG.fallbackVersion);
  const [publishedDate, setPublishedDate] = useState<string>(RELEASE_CONFIG.fallbackDate);
  const [links, setLinks] = useState<DownloadLinks>(() =>
    RELEASE_CONFIG.getDownloadUrls(RELEASE_CONFIG.fallbackVersion)
  );

  useEffect(() => {
    let cancelled = false;
    const apiUrl = `https://api.github.com/repos/${RELEASE_CONFIG.githubOwner}/${RELEASE_CONFIG.githubRepo}/releases/latest`;

    fetch(apiUrl, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data || typeof data.tag_name !== 'string') return;

        const cleanTag = data.tag_name.replace(/^v/i, '');
        const defaultLinks = RELEASE_CONFIG.getDownloadUrls(cleanTag);
        const assets: Array<{ name?: string; browser_download_url?: string }> = Array.isArray(
          data.assets
        )
          ? data.assets
          : [];

        const findAsset = (predicate: (name: string) => boolean) =>
          assets.find((a) => a.name && predicate(a.name.toLowerCase()))?.browser_download_url;

        const resolvedLinks: DownloadLinks = {
          winSetup:
            RELEASE_CONFIG.customUrls.winSetup ||
            findAsset((n) => n.endsWith('.exe') && n.includes('setup')) ||
            defaultLinks.winSetup,
          winPortable:
            RELEASE_CONFIG.customUrls.winPortable ||
            findAsset((n) => n.endsWith('.exe') && n.includes('portable')) ||
            defaultLinks.winPortable,
          macDmg:
            RELEASE_CONFIG.customUrls.macDmg ||
            findAsset((n) => n.endsWith('.dmg')) ||
            defaultLinks.macDmg,
          macZip:
            RELEASE_CONFIG.customUrls.macZip ||
            findAsset((n) => n.endsWith('.zip')) ||
            defaultLinks.macZip,
          releasesPage:
            RELEASE_CONFIG.customUrls.releasesPage ||
            (typeof data.html_url === 'string' ? data.html_url : defaultLinks.releasesPage),
        };

        setVersion(cleanTag);
        setLinks(resolvedLinks);

        if (typeof data.published_at === 'string') {
          const parsed = new Date(data.published_at);
          if (!Number.isNaN(parsed.getTime())) {
            setPublishedDate(
              parsed.toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })
            );
          }
        }
      })
      .catch(() => {
        // Silencieux : les liens de repli (fallbackVersion) restent actifs
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    version,
    publishedDate,
    detectedOS,
    links,
  };
}
