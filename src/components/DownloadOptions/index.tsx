import Link from 'next/link'

import PButton from 'components/PButton'
import SelectButton, { SelectButtonItem } from 'components/SelectButton'

interface DownloadButtonProps {
  to?: string
  options?: Record<string, string>
  label?: string
  variant?: 'contained' | 'outlined'
  gradient?: boolean
}

const DownloadOptions = ({ to, options, label, variant, gradient }: DownloadButtonProps) => {
  const isSingleLink = to || (options && Object.keys(options).length === 1)

  const renderOptions = () => {
    if (!options) return null

    return Object.entries(options).map(([key, value]) => (
      <SelectButtonItem key={key}>
        <Link href={value}>
          {key === 'iso'
            ? 'ISO Image'
            : key === 'utm'
              ? 'UTM (Apple Silicon)'
              : key === 'vmdk'
                ? 'VMware products'
                : key === 'virtualbox'
                  ? 'VirtualBox'
                  : key === 'img'
                    ? 'compressed .img.xz'
                    : key === 'qcow2'
                      ? 'qcow2 for QEMU/KVM'
                      : key}
        </Link>
      </SelectButtonItem>
    ))
  }

  return (
    <>
      {isSingleLink ? (
        <PButton gradient={gradient} variant={variant} to={to || Object.values(options!)[0]}>
          {label || 'Download'}
        </PButton>
      ) : (
        <SelectButton label={label || 'Download'} variant={variant}>
          {renderOptions()}
        </SelectButton>
      )}
    </>
  )
}

export default DownloadOptions
