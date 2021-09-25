import request from "@/api/request";
export default async function getBanner(){
    return await request.get("/api/banner");
}