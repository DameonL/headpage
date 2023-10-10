export default interface BackendMessage<T> {
  originServiceId: string;
  targetServiceId: string;
  package: T;
}