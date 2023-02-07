import { useApi } from "../useApi";
import eventsApi from "../../services/api/eventsApi";
import Event from "../../types/entities/Event";

function useEvents() {
  const {
    data: events,
    isLoading,
    refetch,
    error,
  } = useApi<Event[]>({
    key: "events",
    fetchMethod: () => eventsApi.getEvents(),
  });

  return { events, isLoading, refetch, error };
}

export default useEvents;
