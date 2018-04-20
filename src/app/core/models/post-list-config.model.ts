export interface PostListConfig {
  type: string;

  filters: {
    tag?: string,
    limit?: number,
    offset?: number
  };
}
