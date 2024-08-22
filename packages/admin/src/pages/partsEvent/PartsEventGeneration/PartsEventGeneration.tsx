import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import { css, Skeleton } from "@mui/material";
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
import { theme } from "@watermelon-clap/core/src/theme";
import { apiPostPartsEvent } from "@admin/apis/partsEvent";
import { formatDateTime } from "@admin/common/utils/timeFormatter";

export const PartsEventGeneration = () => {
  const { openModal } = useModal();

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

  const [rewards, setRewards] = useState<
    {
      rewardName: string;
      rewardRank: string;
      winnerCount: number | string;
      rewardFile: File | null;
      rewardImageUrl: string | null;
    }[]
  >([]);

  const maxRewards = 5;

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

  const handleAddReward = () => {
    if (rewards.length >= maxRewards) {
      alert(`최대 ${maxRewards}개의 경품만 등록할 수 있습니다.`);
      return;
    }

    if (!rewardRank || !winnerCount || !rewardName || !rewardFile) {
      alert("모든 경품 정보를 입력해주세요.");
      return;
    }

    const newReward = {
      rewardName,
      rewardRank,
      winnerCount,
      rewardFile,
      rewardImageUrl,
    };

    setRewards([...rewards, newReward]);

    // Reset reward form fields
    setRewardName("");
    setRewardRank("");
    setWinnerCount("");
    setRewardFile(null);
    setRewardImageUrl(null);
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
    if (rewards.length === 0) {
      alert("경품을 최소 1개 이상 추가해 주세요.");
      return;
    }

    const combinedStartDateTime = formatDateTime(
      eventStartDate,
      eventStartTime,
    );
    const combinedEndDateTime = formatDateTime(eventEndDate, eventEndTime);

    openModal({
      type: "confirm",
      props: {
        title: "이벤트 관리",
        content: "등록하시겠습니까?",
        confirmEvent: () => {
          apiPostPartsEvent({
            name: eventTitle,
            startTime: combinedStartDateTime,
            endTime: combinedEndDateTime,
            rewards: rewards,
          }).then((res) => {
            if (res.ok) {
              openModal({
                type: "alert",
                props: {
                  title: "이벤트 등록",
                  content: "등록이 완료되었습니다!",
                },
              });
            }
          });
        },
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

      {/* 추가된 경품 목록 표시 */}
      {rewards.length > 0 && (
        <>
          <h3>추가된 경품 목록</h3>
          <div css={[theme.flex.center, theme.gap.gap24]}>
            {rewards.map((reward, index) => (
              <div
                key={index}
                css={css`
                  border: 1px solid gainsboro;
                  border-radius: 10px;
                  aspect-ratio: 1 / 1;
                `}
              >
                <p>
                  <strong>순위:</strong> {reward.rewardRank}
                </p>
                <p>
                  <strong>이름:</strong> {reward.rewardName}
                </p>
                <p>
                  <strong>당첨자 수:</strong> {reward.winnerCount}
                </p>
                {reward.rewardImageUrl && (
                  <img
                    src={reward.rewardImageUrl}
                    alt={`경품 ${reward.rewardName}`}
                    width={100}
                  />
                )}
                <hr />
              </div>
            ))}
          </div>
        </>
      )}

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

      <Button
        variant="contained"
        onClick={handleAddReward}
        disabled={rewards.length >= maxRewards}
      >
        경품 추가하기
      </Button>

      <Space size={120} />
    </div>
  );
};
