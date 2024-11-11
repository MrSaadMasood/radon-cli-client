import { useEffect, useState } from "react";
import { Globalmessage } from "./GlobalMessage";
import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";

const App = () => {
  const [keysAdded, setKeysAdded] = useState<{ name: string, ttl: string | number }[]>([])
  const [jsonData, setJsonData] = useState({});
  const [errorDiv, setErrorDiv] = useState("")
  const [successDiv, setSuccessDiv] = useState("")

  useEffect(() => {
    setTimeout(() => {
      setErrorDiv("")
    }, 4000)
  }, [errorDiv])

  useEffect(() => {
    setTimeout(() => {
      setSuccessDiv("")
    }, 4000)
  }, [successDiv])

  function setError(err: string) {
    setErrorDiv(err)
  }

  function setSuccess(message: string) {
    setSuccessDiv(message)
  }

  function keyRemover(key: string) {
    setKeysAdded(keys => keys.filter(
      elem => elem.name !== key
    ))
  }

  return (
    <div className="">
      <div className=" bg-black text-white w-full h-auto p-3 flex flex-col space-y-3 justify-center items-center ">
        <h2 className=" text-4xl font-bold ">Radon-CLI</h2>
        <p className=" text-center ">*Radon-cli is a developer tool.
          The frontend is just to showcase how you would interact with the key-value store
        </p>
        <Globalmessage message={errorDiv} theme="bg-red-700" />
        <Globalmessage message={successDiv} theme="bg-green-700" />
      </div>
      <div className="bg-black min-h-screen  flex flex-col md:flex md:flex-row
        items-center justify-center p-4 space-y-4 " >
        <LeftPanel setKeysAdded={setKeysAdded} setJsonData={setJsonData} setError={setError} setSuccess={setSuccess} keyRemover={keyRemover} />
        {/* Right Panel */}
        <RightPanel jsonData={jsonData} keysAdded={keysAdded} keyRemover={keyRemover} />
      </div>
      {/* Left Panel */}
    </div>
  );
};

export default App;
