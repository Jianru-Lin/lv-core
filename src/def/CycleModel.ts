export interface CycleModal<T> {
    readonly data: T;
    onChange: (data: T) => void;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
