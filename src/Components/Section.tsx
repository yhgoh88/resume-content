import styled from "styled-components";
import { COLORS } from "../colors";
import { HEADER_SIZE } from "../sizes";

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 0.5em;
`;

export const SectionHeader = styled.div`
  width: 100px;
  font-size: ${HEADER_SIZE};
  color: ${COLORS.BACKUP_BLUE};
`;

export const SectionContent = styled.div`
  width: 100%;
  align-item: bottom;
`;
