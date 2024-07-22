import { useAuth } from "@service/common/hooks/useAuth";

export const AuthDemoPage = () => {
  const { auth, login, logout } = useAuth();
  return (
    <div>
      {auth == null ? (
        <button
          onClick={() => {
            login();
          }}
        >
          login
        </button>
      ) : (
        <button
          onClick={() => {
            logout();
          }}
        >
          logout
        </button>
      )}
      <div>{auth == null ? "로그인이 필요합니다." : "로그인 되었습니다."}</div>
    </div>
  );
};
