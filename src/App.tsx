import { useSnagixRelease } from './hooks/useSnagixRelease';
import { Navbar } from './components/Navbar';
import { HeroDownload } from './components/HeroDownload';
import { WorkflowStory } from './components/WorkflowStory';
import { FeaturesGrid } from './components/FeaturesGrid';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';

export function App() {
  const release = useSnagixRelease();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar release={release} />
      <main className="flex-1">
        <HeroDownload release={release} />
        <WorkflowStory />
        <FeaturesGrid />
        <DownloadSection release={release} />
      </main>
      <Footer version={release.version} />
    </div>
  );
}

export default App;
