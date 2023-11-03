import KanbanBoard from "../components/KanbanBoard";
import UiPage from "../components/ui/ui-page";

const Home = () => {
  return (
    <section className="flex-grow  h-full  ">
      <KanbanBoard />
      <UiPage />
    </section>
  );
};

export default Home;
