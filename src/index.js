import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const Index = () => {
  return (
    <div className="container ui comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.time.recent()}
          comment={faker.lorem.words()}
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.time.recent()}
          comment={faker.lorem.words()}
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.time.recent()}
          comment={faker.lorem.words()}
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.time.recent()}
          comment={faker.lorem.words()}
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.time.recent()}
          comment={faker.lorem.words()}
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));

export default Index;
