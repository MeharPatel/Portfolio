// import { cva } from 'class-variance-authority';

// const buttonVariants = cva(
//   'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50',
//   {
//     variants: {
//       variant: {
//         default: 'bg-primary text-primary-foreground hover:bg-primary/90',
//         outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
//       },
//       size: {
//         default: 'h-10 py-2 px-4',
//         icon: 'h-9 w-9',
//       },
//     },
//     defaultVariants: {
//       variant: 'default',
//       size: 'default',
//     },
//   }
// );

// const Button = ({ className, variant, size, ...props }) => {
//   return (
//     <button
//       className={buttonVariants({ variant, size, className })}
//       {...props}
//     />
//   );
// };

// export { Button, buttonVariants };