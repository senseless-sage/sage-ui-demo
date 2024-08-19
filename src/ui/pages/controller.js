import { $, createToast, startLoadingAnimation } from "sage-ui/utils/ui";

export default function () {
    $("toggle-content-side-panel").addEventListener("click", () =>
        $("content-side-panel").classList.toggle("show")
    );

    $("toast-btn").addEventListener("click", () => createToast("toast", 3000));

    $("loading-btn").addEventListener("click", () => startLoadingAnimation(1500));
}
