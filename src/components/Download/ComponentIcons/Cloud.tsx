import { ComponentIconProps } from 'src/types'

const Cloud = (props: ComponentIconProps) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3957_3583)">
        <path
          d="M16.666 1.66699H3.33268C2.41221 1.66699 1.66602 2.41318 1.66602 3.33366V6.66699C1.66602 7.58747 2.41221 8.33366 3.33268 8.33366H16.666C17.5865 8.33366 18.3327 7.58747 18.3327 6.66699V3.33366C18.3327 2.41318 17.5865 1.66699 16.666 1.66699Z"
          stroke={props.color}
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.666 11.667H3.33268C2.41221 11.667 1.66602 12.4132 1.66602 13.3337V16.667C1.66602 17.5875 2.41221 18.3337 3.33268 18.3337H16.666C17.5865 18.3337 18.3327 17.5875 18.3327 16.667V13.3337C18.3327 12.4132 17.5865 11.667 16.666 11.667Z"
          stroke={props.color}
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 5H5.00833"
          stroke={props.color}
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 15H5.00833"
          stroke={props.color}
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default Cloud
