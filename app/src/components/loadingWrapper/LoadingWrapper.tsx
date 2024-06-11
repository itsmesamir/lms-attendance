import React from "react";

import Loading from "../loading/Loading";

interface LoadingWrapperProps {
  loading: boolean;
  length: number;
  emptyMessage: string;
  children: JSX.Element | JSX.Element[];
}

function LoadingWrapper(props: LoadingWrapperProps) {
  const { emptyMessage, loading, children, length } = props;

  const isDataListEmpty = !length;

  const showEmptyMessage = !loading && isDataListEmpty;

  return (
    <>
      {showEmptyMessage && (
        <div>
          <h3 className="text-center text-gray-500 text-lg">{emptyMessage}</h3>
        </div>
      )}

      {!isDataListEmpty && !loading && children}

      {loading && <Loading />}
    </>
  );
}

export default LoadingWrapper;
