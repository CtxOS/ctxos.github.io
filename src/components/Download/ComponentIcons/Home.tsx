import { ComponentIconProps } from 'src/types'

const Home = (props: ComponentIconProps) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3957_273)">
        <path
          d="M13.333 2H2.66634C1.92996 2 1.33301 2.59695 1.33301 3.33333V10C1.33301 10.7364 1.92996 11.3333 2.66634 11.3333H13.333C14.0694 11.3333 14.6663 10.7364 14.6663 10V3.33333C14.6663 2.59695 14.0694 2 13.333 2Z"
          stroke={props.color}
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.33301 14H10.6663"
          stroke={props.color}
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11.333V13.9997"
          stroke={props.color}
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export default Home
