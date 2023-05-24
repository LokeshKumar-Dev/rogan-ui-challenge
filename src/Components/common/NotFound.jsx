import { Button, Result } from "antd";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <button
            onClick={() => {}}
            type="primary"
            className="bg-dark-purple py-2 px-4 rounded-lg bg-blue-900 text-white hover:bg-blue-800"
          >
            Return To Home
          </button>
        }
      />
    </div>
  );
};

export default NotFound;
