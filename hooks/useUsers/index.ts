import { useApi } from "../useApi";
import usersApi from "../../services/api/usersApi";
import User from "../../types/entities/User";

function useUsers() {
  const {
    data: users,
    isLoading,
    refetch,
    error,
  } = useApi<User[]>({
    key: "users",
    fetchMethod: () => usersApi.getUsers(),
  });

  async function createUser(name: string, cellphone: string) {
    await usersApi.postUser(name, cellphone);
  }

  return { users, createUser, isLoading, refetch, error };
}

export default useUsers;
