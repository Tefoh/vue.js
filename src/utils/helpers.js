export const handleError = res => {
  if (! res.ok) {
    throw new Error('اررور داشتیم')
  }

  return res;
}