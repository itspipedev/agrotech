import { useId, cloneElement, isValidElement } from 'react';
import type { ReactNode, ReactElement } from 'react';

function Field({ label, children }: { label: string; children: ReactNode }) {
  const id = useId();
  const childWithId = isValidElement(children) ? cloneElement(children as ReactElement<any>, { id }) : children;
  return (
    <label className="field" htmlFor={id}>
      <span className="field__label">{label}</span>
      {childWithId}
    </label>
  );
}

export default Field;