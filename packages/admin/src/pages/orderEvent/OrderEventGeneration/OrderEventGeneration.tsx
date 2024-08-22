import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import { Skeleton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextField from "@mui/material/TextField";
import { handleFileChange } from "../../../common/utils/fileUtil";
import { formatDateTime } from "../../../common/utils/timeFormatter";
import {
  containerStyle,
  hrStyle,
  quizImageStyle,
  rewardImageStyle,
  buttonStyle,
  VisuallyHiddenInput,
  LabelWrapper,
  Label,
  FlexBetween,
} from "./OrderEventGeneration.css";
import { Space } from "../../../common/components/Space";
import { apiPostOrderEvent } from "@admin/apis/orderEvent/apiPostOrderEvent";
import { useModal } from "@watermelon-clap/core/src/hooks";

export const OrderEventGeneration = () => {
  const { openModal } = useModal();
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [startTime, setStartTime] = useState<Dayjs | null>(
    dayjs().hour(10).minute(0).second(0),
  );
  const [endTime, setEndTime] = useState<Dayjs | null>(
    dayjs().hour(23).minute(59).second(59),
  );
  const [maxParticipants, setMaxParticipants] = useState<number | null>(null);
  const [quizFile, setQuizFile] = useState<File | null>(null);
  const [quizImageUrl, setQuizImageUrl] = useState<string | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<string>("");
  const [rewardFile, setrewardFile] = useState<File | null>(null);
  const [rewardImageUrl, setrewardImageUrl] = useState<string | null>(null);
  const [reward, setreward] = useState<string>("");

  // References for focus
  const dateRef = useRef<HTMLInputElement>(null);
  const startTimeRef = useRef<HTMLInputElement>(null);
  const endTimeRef = useRef<HTMLInputElement>(null);
  const maxParticipantsRef = useRef<HTMLInputElement>(null);
  const quizAnswerRef = useRef<HTMLInputElement>(null);
  const rewardRef = useRef<HTMLInputElement>(null);

  const handleQuizFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileChange(event, setQuizFile, setQuizImageUrl);
  };

  const handlerewardFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleFileChange(event, setrewardFile, setrewardImageUrl);
  };

  const handleRegisterClick = () => {
    // Check if required fields are filled
    if (!date) {
      alert("이벤트 진행 날짜를 입력해 주세요.");
      dateRef.current?.focus();
      return;
    }
    if (!startTime) {
      alert("시작 예정 시간을 입력해 주세요.");
      startTimeRef.current?.focus();
      return;
    }
    if (!endTime) {
      alert("종료 예정 시간을 입력해 주세요.");
      endTimeRef.current?.focus();
      return;
    }
    if (maxParticipants === null || maxParticipants <= 0) {
      alert("선착순 인원을 설정해 주세요.");
      maxParticipantsRef.current?.focus();
      return;
    }
    if (!quizFile) {
      alert("이벤트 문제 파일을 업로드해 주세요.");
      return;
    }
    if (!quizAnswer) {
      alert("이벤트 정답을 입력해 주세요.");
      quizAnswerRef.current?.focus();
      return;
    }
    if (!rewardFile) {
      alert("경품 파일을 업로드해 주세요.");
      return;
    }
    if (!reward) {
      alert("경품을 입력해 주세요.");
      rewardRef.current?.focus();
      return;
    }

    const combinedStartDateTime = formatDateTime(date, startTime);
    const combinedEndDateTime = formatDateTime(date, endTime);

    const orderEventData = {
      reward: { name: reward },
      winnerCount: maxParticipants,
      startDate: combinedStartDateTime,
      endDate: combinedEndDateTime,
      quiz: { answer: quizAnswer },
    };

    apiPostOrderEvent({
      orderEvent: orderEventData,
      rewardImage: rewardFile,
      quizImage: quizFile,
    }).then(() => {
      openModal({
        type: "alert",
        props: { title: "이벤트 등록", content: "등록이 완료되었습니다!" },
      });
    });
  };

  return (
    <div css={containerStyle}>
      <Space size={120} />
      {/* 날짜 설정 섹션 */}
      <FlexBetween>
        <LabelWrapper>
          <Label htmlFor="quiz-date">이벤트 진행 날짜</Label>
          <DatePicker value={date} onChange={(newValue) => setDate(newValue)} />
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

      <FlexBetween>
        <LabelWrapper>
          <Label>시작 예정</Label>
          <TimePicker
            value={startTime}
            onChange={(newValue) => setStartTime(newValue)}
          />
        </LabelWrapper>
      </FlexBetween>

      <FlexBetween>
        <LabelWrapper>
          <Label>종료 예정</Label>
          <TimePicker
            value={endTime}
            onChange={(newValue) => setEndTime(newValue)}
          />
        </LabelWrapper>
      </FlexBetween>

      <hr css={hrStyle} />

      {/* 최대 인원 섹션 */}
      <FlexBetween>
        <LabelWrapper>
          <Label htmlFor="max-participants">선착순 인원 설정</Label>
          <TextField
            id="max-participants"
            type="number"
            value={maxParticipants || ""}
            onChange={(e) => setMaxParticipants(parseInt(e.target.value, 10))}
            InputLabelProps={{ shrink: true }}
            inputRef={maxParticipantsRef}
          />
        </LabelWrapper>
      </FlexBetween>

      <hr css={hrStyle} />

      {/* 이벤트 섹션 */}
      <FlexBetween>
        <LabelWrapper>
          <Label>이벤트 문제 업로드</Label>
          <div css={quizImageStyle}>
            {!quizImageUrl ? (
              <Skeleton variant="rectangular" width={100} height={100} />
            ) : (
              <img src={quizImageUrl} alt="이벤트 이미지" />
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
              onChange={handleQuizFileChange}
            />
          </Button>
        </LabelWrapper>
      </FlexBetween>

      <FlexBetween>
        <LabelWrapper>
          <Label htmlFor="quiz-answer">이벤트 정답</Label>
          <TextField
            id="quiz-answer"
            value={quizAnswer}
            onChange={(e) => setQuizAnswer(e.target.value)}
            inputProps={{ maxLength: 15 }}
            inputRef={quizAnswerRef}
          />
        </LabelWrapper>
      </FlexBetween>

      <hr css={hrStyle} />

      {/* 경품 섹션 */}
      <FlexBetween>
        <LabelWrapper>
          <Label>경품 이미지 업로드</Label>
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
              onChange={handlerewardFileChange}
            />
          </Button>
        </LabelWrapper>
      </FlexBetween>

      <FlexBetween>
        <LabelWrapper>
          <Label htmlFor="reward">경품</Label>
          <TextField
            id="reward"
            value={reward}
            onChange={(e) => setreward(e.target.value)}
            inputRef={rewardRef}
          />
        </LabelWrapper>
      </FlexBetween>
      <Space size={120} />
    </div>
  );
};
