import React from "react";
import useData from "../../../Hooks/useData";

const Faq = () => {
  const { datas, loading } = useData("https://movie-master-server-six.vercel.app/faqs");
  // console.log(datas);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <h1 className="heading">Frequently Asked (FAQ)</h1>

      <div>
        {datas.map((data) => (
          <details
            key={data._id}
            className="collapse bg-base-200 my-2 border border-base-300"
            name="my-accordion-det-1"
            open
          >
            <summary className="collapse-title font-semibold">
              {data.question}
            </summary>
            <div className="collapse-content text-sm">{data.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faq;
