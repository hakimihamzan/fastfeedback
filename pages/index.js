import { Button, ButtonGroup, Code, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <div >
      <Head>
        <title>Fast Feedback</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main >
        <Heading>Fast Feedback</Heading>

        <Text >
          Current User : <Code >{auth.user ? auth.user.email : 'None'}</Code>
        </Text>

        {auth.user ? (
          <Button
            onClick={(e) => {
              auth.signout();
            }}
          >
            SignOut
          </Button>
        ) : (<Button
          onClick={(e) => {
            auth.signinWithGithub();
          }}
        >
          Sign In
        </Button>)}
      </main>

      <footer>

      </footer>
    </div>
  );
}
