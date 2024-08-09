import {  createTheme, MantineColorsTuple, MantineTheme } from '@mantine/core';

const myColor: MantineColorsTuple = [
    "#e5feee",
    "#d2f9e0",
    "#a8f1c0",
    "#7aea9f",
    "#53e383",
    "#3bdf70",
    "#2bdd66",
    "#1ac455",
    "#0caf49",
    "#00963c"
  ]
export const Mantinetheme:MantineTheme = createTheme({
    colorScheme: 'dark',
    colors: {
      dark: [
        '#d5d7e0', // Dark 0
        '#acaebf', // Dark 1
        '#8c8fa3', // Dark 2
        '#666980', // Dark 3
        '#4d4f66', // Dark 4
        '#34354a', // Dark 5
        '#2b2c3d', // Dark 6
        '#1d1e30', // Dark 7
        '#0c0d21', // Dark 8
        '#01010a', // Dark 9
      ],
      primary: ['#FFDDC1', '#FFAB91', '#FF8A65', '#FF7043', '#FF5722', '#F4511E', '#E64A19', '#D84315', '#BF360C', '#8C0000'],
      secondary: ['#D0F4DE', '#A9E4C8', '#82D4B2', '#5BC49B', '#34B485', '#25A065', '#18804E', '#0B6036', '#00401E', '#002010'],
    },
    components: {
      Skeleton: {
        styles: (theme) => ({
          root: {
            backgroundColor: theme.colorScheme === 'dark' ? '#2c2c2c' : '#e0e0e0',
          },
        }),
      },
    },
    fontFamily: 'Arial, sans-serif',
    headings: {
      fontFamily: 'Georgia, serif',
      sizes: {
        h1: { fontSize: 30 },
      },
    },
    components: {
      Input: {
        styles: (theme) => ({
          input: {
            backgroundColor: theme.colors.dark[6],
            borderColor: theme.colors.primary[4],
            color: theme.white,
            '&::placeholder': {
              color: theme.colors.gray[5],
            },
            '&:focus': {
              borderColor: theme.colors.primary[5],
            },
          },
        }),
      },
      TextInput: {
        styles: (theme) => ({
          input: {
            backgroundColor: theme.colors.dark[6],
            borderColor: theme.colors.primary[4],
            color: theme.white,
            '&::placeholder': {
              color: theme.colors.gray[5],
            },
            '&:focus': {
              borderColor: theme.colors.primary[5],
            },
          },
        }),
      },
      PasswordInput: {
        styles: (theme) => ({
          input: {
            backgroundColor: theme.colors.dark[6],
            borderColor: theme.colors.primary[4],
            color: theme.white,
            '&::placeholder': {
              color: theme.colors.gray[5],
            },
            '&:focus': {
              borderColor: theme.colors.primary[5],
            },
          },
        }),
      },
      Button: {
        styles: (theme) => ({
          root: {
            backgroundColor: theme.colors.primary[5],
            color: theme.white,
            '&:hover': {
              backgroundColor: theme.colors.primary[6],
            },
          },
        }),
      },
      Text: {
        styles: (theme) => ({
          root: {
            color: theme.colors.primary[0],
          },
        }),
      },
    },
  }
);

