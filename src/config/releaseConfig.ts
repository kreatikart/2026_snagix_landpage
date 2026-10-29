export interface DownloadLinks {
  winSetup: string;
  winPortable: string;
  macDmg: string;
  macZip: string;
  releasesPage: string;
}

/**
 * Configuration centralisée des téléchargements Snagix.
 *
 * Par défaut, la landing page cible le dépôt public `kdavong/snagix-releases`.
 * Vous pouvez modifier `githubOwner` / `githubRepo` ou renseigner directement
 * `customUrls` si vos binaires sont hébergés sur une URL personnalisée.
 */
export const RELEASE_CONFIG = {
  githubOwner: import.meta.env.VITE_GITHUB_OWNER || 'kdavong',
  githubRepo: import.meta.env.VITE_GITHUB_REPO || 'snagix-releases',
  fallbackVersion: import.meta.env.VITE_FALLBACK_VERSION || '1.2.3',
  fallbackDate: '29 octobre 2026',

  /**
   * Surcharges manuelles optionnelles.
   * Si un champ est non vide, il remplace prioritairement le lien GitHub Releases.
   */
  customUrls: {
    winSetup: import.meta.env.VITE_WIN_SETUP_URL || '',
    winPortable: import.meta.env.VITE_WIN_PORTABLE_URL || '',
    macDmg: import.meta.env.VITE_MAC_DMG_URL || '',
    macZip: import.meta.env.VITE_MAC_ZIP_URL || '',
    releasesPage: import.meta.env.VITE_RELEASES_PAGE_URL || '',
  },

  getDownloadUrls(version: string): DownloadLinks {
    const cleanVersion = version.replace(/^v/i, '');
    const base = `https://github.com/${this.githubOwner}/${this.githubRepo}/releases/download/v${cleanVersion}`;

    return {
      winSetup: this.customUrls.winSetup || `${base}/Snagix-Setup-${cleanVersion}.exe`,
      winPortable: this.customUrls.winPortable || `${base}/Snagix-Portable-${cleanVersion}.exe`,
      macDmg: this.customUrls.macDmg || `${base}/Snagix-${cleanVersion}-arm64.dmg`,
      macZip: this.customUrls.macZip || `${base}/Snagix-${cleanVersion}-arm64.zip`,
      releasesPage:
        this.customUrls.releasesPage ||
        `https://github.com/${this.githubOwner}/${this.githubRepo}/releases/latest`,
    };
  },
};
