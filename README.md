# @crbpay/react-qr

A React component for displaying CRBPay QR codes. This SDK provides a simple and efficient way to integrate CRBPay payment QR codes into your React applications, supporting both production and sandbox environments with built-in loading states and error handling.

## Installation

```bash
npm install @crbpay/react-qr
# or
yarn add @crbpay/react-qr
# or
pnpm add @crbpay/react-qr
```

## Usage

### Basic Usage

```tsx
import { CRBPayQR } from '@crbpay/react-qr';

function PaymentComponent() {
  return (
    <CRBPayQR
      address="0x123..."
      chainId={1}
      amount={100}
    />
  );
}
```

### Sandbox Environment

To use the sandbox environment for testing:

```tsx
<CRBPayQR
  address="0x123..."
  chainId={84532} // Base Sepolia, for example
  amount={10.5}
  isSandbox={true}
/>
```

### Custom Styling

You can pass a custom `className` to style the container, or use inline styles. The component renders a wrapper `div` containing the `img`.

```tsx
<CRBPayQR
  address="0x123..."
  chainId={1}
  amount={100}
  className="my-qr-code-class" // Default: "w-[240px] h-[240px] object-contain"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `address` | `string` | **Required** | The wallet or Account Abstraction address for the payment. |
| `chainId` | `number \| string` | **Required** | The ID of the blockchain network (e.g., 1 for Ethereum Mainnet, 8453 for Base). |
| `amount` | `number \| string` | **Required** | The payment amount. |
| `isSandbox` | `boolean` | `false` | Set to `true` to use the CRBPay Sandbox environment. |
| `className` | `string` | `"w-[240px] h-[240px]..."` | CSS class for the container element. |
| `alt` | `string` | `"CRBPay QR"` | Alt text for the QR code image. |
| `baseUrl` | `string` | `undefined` | Optional override for the QR service base URL. |

## Features

- **Automatic URL Generation**: Automatically constructs the correct QR code URL based on the provided parameters.
- **Environment Support**: Easily switch between Production and Sandbox environments.
- **Loading State**: Displays a built-in spinner while the QR code image is loading.
- **Error Handling**: Shows a friendly error message if the image fails to load.
- **Type Safety**: Fully typed with TypeScript.

## License

MIT
# react-qr
