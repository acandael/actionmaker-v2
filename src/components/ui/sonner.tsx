import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      expand={true}
      richColors
      toastOptions={{
        classNames: {
          toast: 'bg-white border border-gray-100 shadow-lg rounded-xl p-4',
          title: 'text-gray-900 font-semibold',
          description: 'text-gray-600 text-sm',
          actionButton:
            'bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200',
          cancelButton:
            'bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-200',
          success: 'bg-green-50 border-green-100',
          error: 'bg-red-50 border-red-100',
          loading: 'bg-blue-50 border-blue-100',
        },
        duration: 4000,
      }}
      {...props}
    />
  );
};

export { Toaster };
