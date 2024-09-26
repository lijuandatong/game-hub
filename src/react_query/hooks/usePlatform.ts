import usePlatforms from "./usePlatfroms"

const usePlatform = (id?: number) => {
    const {data: platforms} = usePlatforms()
    return platforms?.results.find(platform => platform.id === id)
}

export default usePlatform