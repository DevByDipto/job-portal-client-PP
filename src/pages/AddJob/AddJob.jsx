import React from "react";

const AddJob = () => {
  return (
    <div>
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 ">
          <label className="label">job title</label>
          <input type="text" className="input" name="title" placeholder="job title" />

          <label className="label">job location</label>
          <input type="text" className="input" name="location" placeholder="my-awesome-page" />

          <label className="label">Author</label>
          <input type="text" className="input" placeholder="Name" />
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
