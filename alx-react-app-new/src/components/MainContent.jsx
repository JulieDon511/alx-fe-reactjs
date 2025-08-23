const MainContent = ()=>{
    return(
        <div className="main"
                style={{
                backgroundColor: "#f5f5f5",           // Soft neutral background
                border: "1px solid #ccc",             // Light border for subtle framing
                padding: "20px",
                margin: "20px auto",
                color: "#34495e",                     // Deep slate for better readability
                borderRadius: "8px",
                width: "90%",
                maxWidth: "600px",
                fontSize: "1rem",
                lineHeight: "1.6",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)", // Gentle depth
            }}>
            
            <main>
            <p>I love to visit New York, Paris, and Tokyo.</p>
            </main>
        </div>

    )
}

export default MainContent;
