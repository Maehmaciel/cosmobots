import styled from 'styled-components';

export const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #fff;
  color: black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Button = styled.button`
  background-color: #73b452;
  padding: 10px;
  color: #fff;
  border-radius: 10px;
`;
