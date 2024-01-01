function useDevelopmentModeHook(): boolean {
    return process.env.NODE_ENV === "development";
}

export default useDevelopmentModeHook