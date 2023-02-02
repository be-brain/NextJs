import Seo from "@/components/Seo";
import { useRouter } from "next/router";
import React from "react";

const Detail = () => {
  const router = useRouter();
  const [title, id] = router.query.params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default Detail;

export async function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
// api에서 data를 fetch 해오지는 않고 url정보만 가져온 상태
