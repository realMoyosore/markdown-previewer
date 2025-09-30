import React from "react";

const ErrorTestPage: React.FC = () => {
    throw new Error("This is a test error from ErrorTestPage component.");
};

export default ErrorTestPage;