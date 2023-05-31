export const validateId = (inputId: string) => {
    return new Promise<string>((resolve, reject)=>{
        if (!inputId.length) return reject("נא הקש ת.ז.");
        if (inputId.length > 9) return reject("ת.ז. ארוכה מדי");
        let responseId = inputId;
        while (responseId.length !== 9 ) {
            responseId = "0" + responseId;
        }
        return resolve(responseId);
    })
}