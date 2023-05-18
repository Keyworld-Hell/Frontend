import React from "react";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

import org from "../../../assets/img/organization.png";

const Greeting = () => {
  return (
    <>
      <PageImage img={"company-img"} title="About Us" />
      <PageTitle title={"CEO 인사말"} />
      <div className="container m-0">
        <div>
          <p>
            키월드는2001년 설립되었으며, 오랜 경험과 노하우를 바탕으로 항상
            고객님께 최고의 품질을 보답해 드릴것을 약속드립니다.
            <br />
            저희는 이러한 고객의 사랑과 은혜를 잊지 않는 겸손한 마음으로 언제나
            노력하는 기업이 되겠습니다.
            <br />
            마지막으로 키월드는 품질과 신뢰라는 슬로건을 중심으로 경험과 다음과
            같은품질 방침을 이어 갈 것을 약속 드립니다.
            <br />
          </p>
          <p>
            <b>첫째,</b>고객품질 경쟁력 확보
          </p>
          <p>
            <b>둘째,</b> 원가 절감 경영 안정화
          </p>
          <p>
            <b>셋째,</b> 사원의식 구조 혁신과 변화
          </p>
          <p>
            <b>넷째,</b> 공정 품질 안정화
          </p>
          <p>
            <b>다섯째,</b> 출하 춤질 확보
          </p>
          <p>
            <b>여섯째,</b> 고객 품질 정보 분석
          </p>
        </div>
      </div>
      <PageTitle title={"비전"} />
      <div className="container m-0"></div>
      <PageTitle title={"조직도"} />
      <div className="container m-0"></div>
    </>
  );
};

export default Greeting;
//   </div>
//   키월드는2001년 설립되었으며, 오랜 경험과 노하우를 바탕으로 항상
//   고객님께 최고의 품질을 보답해 드릴것을 약속드립니다.
//   <br />
//   저희는 이러한 고객의 사랑과 은혜를 잊지 않는 겸손한 마음으로 언제나
//   노력하는 기업이 되겠습니다.
//   <br />
//   마지막으로 키월드는 품질과 신뢰라는 슬로건을 중심으로 경험과 다음과
//   같은품질 방침을 이어 갈 것을 약속 드립니다.
//   <br />
//   <p>
//     <b>첫째,</b>고객품질 경쟁력 확보
//   </p>
//   <p>
//     <b>둘째,</b> 원가 절감 경영 안정화
//   </p>
//   <p>
//     <b>셋째,</b> 사원의식 구조 혁신과 변화
//   </p>
//   <p>
//     <b>넷째,</b> 공정 품질 안정화
//   </p>
//   <p>
//     <b>다섯째,</b> 출하 춤질 확보
//   </p>
//   <p>
//     <b>여섯째,</b> 고객 품질 정보 분석
//   </p>
// </div>
