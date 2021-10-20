import { Link } from "react-router-dom";
import { CubeIcon } from "@heroicons/react/solid";

export const AppShell = ({ children }) => {
  return (
    <div className="pt-14">
      <header className="fixed h-14 inset-x-0 top-0 z-50 bg-gray-100">
          <div className="flex justify-between items-center align-center h-14 px-3">
              <nav className="flex items-center gap-4">
                <Link to="/" className="transform hover:scale-110">
                  <CubeIcon className="h-7 w-7 text-green-800 inline-block" />
                  <span className="inline-block text-2xl">gameshub</span>
                </Link>
                <div className="flex gap-4">
                    <Link to="/games" className="text-lg font-medium text-gray-700 hover:text-gray-800 transform hover:scale-110">
                        Games
                    </Link>
                </div>
              </nav>
          </div>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-100 bottom-0">
        <div className="flex flex-col justify-center items-center py-2 max-w-7xl mx-auto">
            <span>PowerX Frontend Project</span>
            <a className="text-blue-700 underline" href="https://github.com/jaowei/powerx-frontend-project">View Project Here</a>
            <span>Powered By: <a className="text-blue-700 underline" href="https://rawg.io/apidocs">Rawg.io</a></span>
        </div>
      </footer>
    </div>
  );
};
