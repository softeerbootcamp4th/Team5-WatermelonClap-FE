import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import { Skeleton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextField from "@mui/material/TextField";
import {
  containerStyle,
  hrStyle,
  rewardImageStyle,
  buttonStyle,
  VisuallyHiddenInput,
  LabelWrapper,
  Label,
  FlexBetween,
} from "./PartsEventGeneration.css";
import { Space } from "../../../common/components/Space";
import { useModal } from "@watermelon-clap/core/src/hooks";
import { handleFileChange } from "@admin/common/utils/fileUtil";

export const PartsEventGeneration = () => {
  const { openModal } = useModal();

  // Updated state variable names
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventStartDate, setEventStartDate] = useState<Dayjs | null>(
    dayjs(new Date()),
  );
  const [eventStartTime, setEventStartTime] = useState<Dayjs | null>(
    dayjs().hour(10).minute(0).second(0),
  );
  const [eventEndDate, setEventEndDate] = useState<Dayjs | null>(
    dayjs(new Date()),
  );
  const [eventEndTime, setEventEndTime] = useState<Dayjs | null>(
    dayjs().hour(23).minute(59).second(59),
  );
  const [rewardName, setRewardName] = useState<string>("");
  const [rewardRank, setRewardRank] = useState<string>("");
  const [winnerCount, setWinnerCount] = useState<number | string>("");
  const [rewardFile, setRewardFile] = useState<File | null>(null);
  const [rewardImageUrl, setRewardImageUrl] = useState<string | null>(null);

  // References for focus
  const eventTitleRef = useRef<HTMLInputElement>(null);
  const eventStartDateRef = useRef<HTMLInputElement>(null);
  const eventStartTimeRef = useRef<HTMLInputElement>(null);
  const eventEndDateRef = useRef<HTMLInputElement>(null);
  const eventEndTimeRef = useRef<HTMLInputElement>(null);
  const rewardNameRef = useRef<HTMLInputElement>(null);
  const rewardRankRef = useRef<HTMLInputElement>(null);
  const winnerCountRef = useRef<HTMLInputElement>(null);

  const handleRewardFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleFileChange(event, setRewardFile, setRewardImageUrl);
  };

  const handleRegisterClick = () => {
    if (!eventTitle) {
      alert("이벤트 제목을 입력해 주세요.");
      eventTitleRef.current?.focus();
      return;
    }
    if (!eventStartDate) {
      alert("이벤트 시작 날짜를 입력해 주세요.");
      eventStartDateRef.current?.focus();
      return;
    }
    if (!eventStartTime) {
      alert("이벤트 시작 시간을 입력해 주세요.");
      eventStartTimeRef.current?.focus();
      return;
    }
    if (!eventEndDate) {
      alert("이벤트 종료 날짜를 입력해 주세요.");
      eventEndDateRef.current?.focus();
      return;
    }
    if (!eventEndTime) {
      alert("이벤트 종료 시간을 입력해 주세요.");
      eventEndTimeRef.current?.focus();
      return;
    }
    if (!rewardRank) {
      alert("경품 순위를 입력해 주세요.");
      rewardRankRef.current?.focus();
      return;
    }
    if (!winnerCount) {
      alert("당첨자 수를 입력해 주세요.");
      winnerCountRef.current?.focus();
      return;
    }
    if (!rewardName) {
      alert("경품 이름을 입력해 주세요.");
      rewardNameRef.current?.focus();
      return;
    }
    if (!rewardFile) {
      alert("경품 파일을 업로드해 주세요.");
      return;
    }

    openModal({
      type: "confirm",
      props: {
        title: "이벤트 관리",
        content: "등록하시겠습니까?",
        confirmEvent: () => {},
      },
    });
  };

  return (
    <div css={containerStyle}>
      <Space size={120} />

      {/* 이벤트 제목 섹션 */}
      <FlexBetween>
        <LabelWrapper>
          <Label htmlFor="event-title">이벤트 제목</Label>
          <TextField
            placeholder="이벤트 제목"
            id="event-title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            inputRef={eventTitleRef}
          />
        </LabelWrapper>

        <Button
          variant="contained"
          color="primary"
          sx={buttonStyle}
          onClick={handleRegisterClick}
        >
          등록하기
        </Button>
      </FlexBetween>

      <hr css={hrStyle} />

      {/* 시작 일시 설정 섹션 */}
      <FlexBetween>
        <LabelWrapper>
          <Label htmlFor="start-date">이벤트 시작 일시</Label>
          <DatePicker
            value={eventStartDate}
            onChange={(newValue) => setEventStartDate(newValue)}
          />
          <TimePicker
            value={eventStartTime}
            onChange={(newValue) => setEventStartTime(newValue)}
          />
        </LabelWrapper>
      </FlexBetween>

      {/* 종료 일시 설정 섹션 */}
      <FlexBetween>
        <LabelWrapper>
          <Label htmlFor="end-date">이벤트 종료 일시</Label>
          <DatePicker
            value={eventEndDate}
            onChange={(newValue) => setEventEndDate(newValue)}
          />
          <TimePicker
            value={eventEndTime}
            onChange={(newValue) => setEventEndTime(newValue)}
          />
        </LabelWrapper>
      </FlexBetween>

      <hr css={hrStyle} />

      {/* 경품 섹션 */}

      <FlexBetween>
        <LabelWrapper>
          <Label htmlFor="reward-rank">경품 순위</Label>
          <TextField
            placeholder="경품 순위"
            id="reward-rank"
            value={rewardRank}
            onChange={(e) => setRewardRank(e.target.value)}
            inputRef={rewardRankRef}
          />
        </LabelWrapper>
      </FlexBetween>

      <FlexBetween>
        <LabelWrapper>
          <Label htmlFor="winner-count">당첨자 수</Label>
          <TextField
            placeholder="당첨자 수"
            id="winner-count"
            value={winnerCount}
            onChange={(e) => setWinnerCount(Number(e.target.value) || "")}
            inputRef={winnerCountRef}
          />
        </LabelWrapper>
      </FlexBetween>
      <FlexBetween>
        <LabelWrapper>
          <Label htmlFor="reward-name">경품 이름</Label>
          <TextField
            placeholder="경품 이름"
            id="reward-name"
            value={rewardName}
            onChange={(e) => setRewardName(e.target.value)}
            inputRef={rewardNameRef}
          />
        </LabelWrapper>
      </FlexBetween>

      <FlexBetween>
        <LabelWrapper>
          <Label htmlFor="reward-image">경품 이미지</Label>
          <div css={rewardImageStyle}>
            {!rewardImageUrl ? (
              <Skeleton variant="rectangular" width={100} height={100} />
            ) : (
              <img src={rewardImageUrl} alt="경품 이미지" />
            )}
          </div>
          <Button
            component="label"
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={buttonStyle}
          >
            업로드
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              onChange={handleRewardFileChange}
            />
          </Button>
        </LabelWrapper>
      </FlexBetween>

      <Space size={120} />
    </div>
  );
};
