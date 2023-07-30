import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import "../styles/Email.scss";
import ScaleLoader from "react-spinners/ScaleLoader";
import SampleMail from "../stampMails/placeholder.json";
import MyButton from "./MyButton.tsx";
import MyDropdown from "./MyDropdown.tsx";

interface EmailProps {}

const Email: React.FC<EmailProps> = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [changeColor, setChangeColor] = useState("#213547");
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  //use state that collects all selections from the dropdown
  const [status, setStatus] = useState([]);
  // use state called selectedTracks
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [futureStatus, setFutureStatus] = useState("general");
  // function that adds to selections list

  const addCurStat = (selectedData) => {
    console.log("************* ", selectedData);
    if (!status.includes(selectedData)) {
      setStatus([...status, selectedData]);
    } else {
      setStatus(status.filter((s) => s !== selectedData));
    }
  };

  const addTrack = (selectedData) => {
    if (!selectedTracks.includes(selectedData)) {
      if (selectedData == "All Tracks")
        // only add All tracks and nothing else
        setSelectedTracks([selectedData]);
      else if (!selectedTracks.includes("All Tracks"))
        setSelectedTracks([...selectedTracks, selectedData]);
    } else {
      //remove from array
      setSelectedTracks(selectedTracks.filter((s) => s !== selectedData));
    }
  };

  const addFutureStat = (selectedData) => {
    //if already exists remove it
    if (futureStatus === selectedData) {
      setFutureStatus("general");
    } else {
      setFutureStatus(selectedData);
    }
  };

  // useEffect(() => {
  //   console.log("The --> selected tracks are: ", selectedTracks);
  // }, [selectedTracks]);

  // useEffect(() => {
  //   console.log("The ---> status is: ", status);
  // }, [status]);
  // useEffect(() => {
  //   console.log("The ---> future status is: ", futureStatus);
  // }, [futureStatus]);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      document.body.style.backgroundColor = "#0f0f14";
      setChangeColor("white");
      const secondTimer = setTimeout(() => {
        setShowHeader(false);
      }, 800);

      return () => clearTimeout(secondTimer);
    }, 1500);

    return () => clearTimeout(firstTimer);
  }, []);

  useEffect(() => {
    const randInd = Math.floor(Math.random() * 3);
    // if accepted
    let placeholderData = "";
    // Set the placeholder text
    if (futureStatus === "accepted")
      placeholderData = SampleMail.acceptedCand.samples[randInd];
    else if (futureStatus === "rejected")
      placeholderData = SampleMail.rejectedCand.samples[randInd];
    else if (futureStatus === "emailed")
      placeholderData = SampleMail.emailedCand.samples[randInd];

    setPlaceholder(placeholderData);
  }, [futureStatus]);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      if (textarea.scrollHeight > textarea.clientHeight)
        textarea.style.height = `${textarea.scrollHeight}px`;
    }

    setInputValue(e.target.value);
  };

  const handleTabPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      if (inputValue === "") {
        handleInputChange(e as ChangeEvent<HTMLTextAreaElement>);
        setInputValue(
          (prevValue) =>
            prevValue + (e.target as HTMLTextAreaElement).placeholder
        );
      }
    }
  };

  return (
    <>
      {showHeader ? (
        <div className="intro">
          <h1 style={{ color: changeColor }}>Candidate Notification Center</h1>
          <ScaleLoader color={changeColor} height={55} width={6} />
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <MyDropdown
              addHandle={addCurStat}
              rmvHandle={addTrack}
              selectedTracks={selectedTracks}
              currentStatus={status}
              futureStatus={futureStatus}
              addFutureStat={addFutureStat}
            />
            <div className="heart">
              <textarea
                ref={textareaRef}
                className="large-input"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleTabPress}
              />
              <MyButton
                text={"Send"}
                currentStatus={status}
                tracks={selectedTracks}
                futureStatus={futureStatus}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Email;
