import { ErrorComponentType } from "@/types/Components/Elements/ErrorComponentType";
import ContentWrap from "./ContentWrap";

const ErrorComponent = ({ message }: ErrorComponentType) => {
  return (
    <div className="w-full bg-red-500 border-red-600 border-x-2 border-y-2 text-white">
      <ContentWrap>
        <div className="flex h-32 items-center">
          <div>{message}</div>
        </div>
      </ContentWrap>
    </div>
  );
};

export default ErrorComponent;
