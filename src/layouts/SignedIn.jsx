import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://lh3.googleusercontent.com/-gAx6x1Z2tuM/UzH1Q_gbUWI/AAAAAAAACaA/-g1Yh8gmrzsB3ObGjuNcHpZrOfBHcS2EQCEwYBhgLKtMDABHVOhy9ztP2Byf5TgScHziLdzJxl37R-ne7hn9hver4tz3FPta-7ygzH7DGCyoaMmCFwscUKev8yXf_1QYR7KqsRY1RstVEd5hS9eCELHXOKMPA3BwIDQFWj2XVpZMlueCYUg44LjBl6zeojxEX7Fkz-eH8GSoFcGQVq_SktMifVOwpdP8KnCgQIUe9w4HCwSxjcvMGKeLvcEkVwyDi2mQekVv5ZjycxdzGdwMv4kqNlzEc_iafZYPYfWNeLDefmMKRFS6Na8fYM9a7NoOLDDMwYL6os4AnyiYunuahFOVgYcen9-cS52ggVtF8W1zucWzpoFeWHhLTHIYwSLdE0HmiFwaLuj_5ByoVSwwQBC2_jmKJ084tD1ZRJJyQPMJJGN7FOAC_wNFm4QWnEHu1GZp9NrNYgfiByb68MBvL1fMHLyXUhhIMD022RlzKUZK-Zauz6YSdSB_ombrXI1zE1xF0m0YUa_Mp_MqSHPBr7y-zcD0J84mZrzwIlV2TolgHfbS6a6DAgjXSXLqMtq8S6258hPo8rIZ94aQOjYORIfv-WY9dj3UfoyA2veTrC3SIl74UeOuorPx5-gIOcXSTKpMXop7eNO4ER2wCzzMWju86SEQwn4GIhgY/w140-h140-p/2014-03-25"
        ></Image>
        <Dropdown pointing="top left" text="Mesut">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
