import { ComponentPropsWithRef } from 'react';

export const IconEnvelope = ({ ...props }: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM10.06 8.683L3.648 3.238L2.353 4.762L10.073 11.317L17.654 4.757L16.346 3.244L10.061 8.683H10.06Z"
        fill="#F9F9F9"
      />
    </svg>
  );
};
