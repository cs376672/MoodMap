import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 bg-red-900 text-white min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">런타임 오류가 발생했습니다.</h1>
          <p className="text-xl mb-8">이 화면을 캡처해서 개발자에게 전달해주세요.</p>
          <div className="bg-black/50 p-6 rounded-xl w-full max-w-4xl overflow-auto text-left">
            <pre className="whitespace-pre-wrap text-red-300 font-mono text-sm">{this.state.error?.toString()}</pre>
            <pre className="mt-4 whitespace-pre-wrap text-red-200/60 font-mono text-xs">{this.state.error?.stack}</pre>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="mt-8 px-6 py-3 bg-white text-red-900 font-bold rounded-lg hover:bg-red-100"
          >
            새로고침
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
