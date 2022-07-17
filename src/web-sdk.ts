import ProtonWebSDK, {
  Link,
  LinkSession,
  ProtonWebLink,
} from "@proton/web-sdk";

export let link: ProtonWebLink | Link | undefined;
export let session: LinkSession | undefined;

const REQUEST_ACCOUNT = "taskly";
const CHAIN_ID =
  "384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0";
const ENDPOINTS = ["https://proton.greymass.com"];

export const createLink = async ({
  restoreSession = false,
}: {
  restoreSession?: boolean;
}): Promise<void> => {
  const { link: localLink, session: localSession } = await ProtonWebSDK({
    linkOptions: {
      endpoints: ENDPOINTS,
      chainId: CHAIN_ID,
      restoreSession,
    },
    transportOptions: {
      requestAccount: REQUEST_ACCOUNT,
      requestStatus: false,
      backButton: true,
    },
    selectorOptions: {
      appName: "Proton Swap",
    },
  });
  link = localLink;
  session = localSession;
};

export const login = async (): Promise<LinkSession | undefined> => {
  await createLink({ restoreSession: false });
  if (session) {
    return session;
  }
};

export const logout = async (): Promise<void> => {
  if (link && session) {
    await link.removeSession(REQUEST_ACCOUNT, session.auth, CHAIN_ID);
  }
  session = undefined;
  link = undefined;
};

export const reconnect = async (): Promise<LinkSession | undefined> => {
  if (!session) {
    await createLink({ restoreSession: true });
  }

  if (session) {
    return session;
  }
};
