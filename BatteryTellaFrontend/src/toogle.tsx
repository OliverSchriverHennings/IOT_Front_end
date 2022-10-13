interface props {
  text: string;
}

export const Toggle = ({ text }: props) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{text}</span>
        <input type="checkbox" className="toggle toggle-primary bg-slate-200" />
      </label>
    </div>
  );
};
