import UrlClick from "../models/urlClickModel.js";
import Url from "../models/urlModel.js";
export const logClick = async ({ url_id, ip_address, user_agent, referer, device_type }) => {
    await UrlClick.create({
        url_id,
        ip_address,
        user_agent,
        referer,
        device_type
    });
};
export const incrementClickCount = async (url_id) => {
    await Url.updateOne({ _id: url_id }, { $inc: { click_count: 1 } });
};
//# sourceMappingURL=click.service.js.map