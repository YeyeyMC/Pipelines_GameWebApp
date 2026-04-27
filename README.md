# PG29 - Yeison Munoz - Cloud Computing - Assignment 1 - Game Portal (Go down for A2 Section)

## Description
This project is based on using Firebase Authentication and Firestore to store data for each player. Also the page contains a window for playing Sponder Bird game, which will be used for data analysis purposes.

- To hide components for Players and Admin, I implemented the admin SDK from Firebase, using the claims to check if a certain user is the admin. The way that I set the admin was creating a .msj code for using it as a node backend code. That code is setAdmin.msj and it basically receives a const uid for the user that we want to set as the admin. Once we run that code (Just once) the user becomes the admin in firebase, and then for the React side, the code just reads those claims and checks if admin is equal to true or not. Depending on that, it will show/hide the corresponding components for each role.

- The user information component just shows his name grabbing the data from Firestore depending on the uid
- The admin dashboard is just a placeholder for putting graphs for the next part (Telemetry).

## Testing
Download the project, install the dependencies if it's required and run with npm run dev

There is a missing file called serviceAccountKey.json in the repo due security reasons. This json is used to connect the node code with firebase so I can set the admin from that.
Here is the content of the JSON. Make sure you put it in the project folder (Same path as the package.json) and you name it exactly as:
- serviceAccountKey.json

#### JSON Content
{
  "type": "service_account",
  "project_id": "project1devops-398b2",
  "private_key_id": "e8dc108f19f2b583751af6b777230e496e94e7df",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC5ohNo9r6l8zlO\nzhrW/Q1u4GBHYvqQVWSmLVTWMKOoA2vVXackoe5VeQQl59OiWKXlDW0IpqHAzkBG\nPpf5gljSVGMXpV6iONxoE76YkcYt9gVjqvEBI4QvET5QekNeY8pcXmtZLTfIDwmr\nAmeIeTaj4T2Sdh1Na2aFOzs18084cbX8he4LihhFy/4YnRdt4xd3HSSXDgpqpIUE\n3Yo0QW+nMc1wuBL2yrDaxQtTgAPPTSbm3qYtNKebhpBMoJDmt85MoCMgSBNHQwQv\nJBeovXdP9NHwHEYhbvjjnJTl6CbK1L6OkMYEJprgRs+fbyKGPmgDL6l5fvIgAb3H\n2SSTYhDpAgMBAAECggEAKCugk6hBnVvC3QDQ4hEkpQe9DfWnTzCLdUJ+B1PDNop2\n/Vck4lKAZtKnSSSfsZQJYkXDgIm+myCG3CyTapUAb5N/VhCdJ/GyEHulVRLGlg+V\nHvpQ6PQsmJrcp0Gt7nEdy1tLU6LrXUmTyAPfL7M7Vb9aOaWBtc02BELLD2O1kvr5\n4GsLVxtNsPbjJt8MS0yyW7Z63+nd9StuvAGABLZSYw0j4uF8KmaGev2AzefEhwL3\nYw9y/a4aw7N/JuMCXDUSyQ8GOgvUt/K0LGPgTdGll9DYy/mNSaJmh2r5SpFfd2W6\nNbbEslvsOEFl2geq30iAnku4IAHoudIPeiTwrTvCmQKBgQDopoCiIm9HCMCfvkad\nwzKdeB7m6CLXGTKZDRCDZH0MJhWip0G0JPcmfiUMuPhOvffIoSqlHxKvmVKdTNwn\nSR3OqRDs9GAG1Pt8zX/MIz7JWQ40eAuJ71zBmfMasHJFmQRAAmnVBxYcdZuJRhRl\n1x+8MhOtQykBw1yViX4JAM1zuwKBgQDMQ45O8L8tAVIy4+tW26l6mjePe8jn4dQM\nis3twL4WSxLfOZIdMCYN0Xze8+iY91leTtJmssZMKoY1461I4ppXeRIYOTohiLWQ\n20TUGelV9Q07uc0OmGPgP7Tx7oICZQWSTi7pmnVaRnctcuxkiqsAdjv2zUco8FMc\nHA0mAMGZqwKBgH33CNbAhjeTyZe0Uk/BDHquOy0SqyqDfh3YMQSzN/GH/Vbf8Hc1\nPIwe6LiGvgsEWFDM0mYs+NUS0uRQZTLwJ69pYrypZATO9IuSSIui2a/zA/nstXKt\noy8/x5y/xF9ihiaSJ/MrrxEhrGEbDJhHbetbwcOiBWXq/QoKM690O8lZAoGBAMSJ\nk9ncxvW0ubSBnKU8QfvXevIx9oM2xOM0gyPqOnwUzBnAuRgghdzx3iZfpUPZa0HU\nsZljFm2e1PfxE4B3mG3l7kUkewxdD+ZLNBSowdyVJqB7DBSpCCBy69WE2c8YCJ5X\nX8gheBzehDlUxKOQ0SxmlxfHOFrpse3wB66zN5R1AoGBAMZKwR3yU/tFSKSiYVKy\nIJ+rIo0Iq+WNDutVwmFVZN8TBHKmWAlIL7/MljMLI/DFmDiYL2WZPBYC1RURng+o\n5jGeuQddLEVtklm5o8GiODZEbCZiM3tw93gVkdOe1LRIPkPGeeCBE0rfcxnFls0l\nDusyEP2wqubq5uAgR7uaTDyo\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@project1devops-398b2.iam.gserviceaccount.com",
  "client_id": "116217456443442595064",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40project1devops-398b2.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

## Default Accounts for testing
### Admin: 
- Email: diana5@gmail.com
- Password: 123456

### PLayer: 
- Email: diana8@gmail.com, diana6@gmail.com, diana9@gmail.com
- Password: 123456

### Sponder Bird game
GitHub Repo: https://github.com/YeyeyMC/Pipelines_SponderBird.git


# PG29 - Yeison Munoz - Cloud Computing - Assignment 2 - Telemetry System

This assignment implements additional features to connect the Sponder Bird Game with the actual React project, making the systems connected to transfer data.

Changes:
- Payload to Firestore: I added additional information from Unity C# to jslib to Firestore
  - startTimestamp
  - endTimestamp
  - clicks amount
- SampleDashboard:
  - Shows the graphs made in python from the data saved in Firestore
  - It shows data from "users" collection and from "scores" collection
- Graphs:
  - Player Scores (Bar Chart)
  - Games played per Player (Bar Chart)
  - Score Timeline (Line Chart)
  - Clicks vs Score (Scatter Plot)

## Default Accounts for testing
### Admin: 
- Email: diana5@gmail.com
- Password: 123456

### Player: 
- Email: diana8@gmail.com, diana6@gmail.com, diana9@gmail.com
- Password: 123456

### Sponder Bird game
GitHub Repo: https://github.com/YeyeyMC/Pipelines_SponderBird.git
