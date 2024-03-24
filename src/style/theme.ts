import "styled-components";

// 테마 인터페이스 정의
export interface ThemeInterface {
  colors: {
    primary: string;
    background: string;
    text: string;
  };
}

// styled-components의 DefaultTheme 확장
declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}

// 테마 객체 정의
export const lightTheme: ThemeInterface = {
  colors: {
    primary: "#007bff",
    background: "#ffffff",
    text: "#212529",
  },
};

export const darkTheme: ThemeInterface = {
  colors: {
    primary: "#789",
    background: "#343a40",
    text: "#ffffff",
  },
};
