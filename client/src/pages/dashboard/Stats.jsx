import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import {
  StatsContainer,
  Loading,
  ChartsContainer,
} from "../../assets/components/index";

function Stats() {
  const { showStats, isLoading, monthlyApplications } = useAppContext();
  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <div>
      <StatsContainer />
      {monthlyApplications?.length > 0 && <ChartsContainer />}
    </div>
  );
}

export default Stats;
