export default function PlayerInformation({ userData }) {
    return (
        <>
            <div className="user-info">
                <p>Ready for a Sponder match { userData?.displayName }?</p>
            </div>
        </>
    )
}