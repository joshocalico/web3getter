type ShowcaseProps = {
  data: any;
};

const Showcase = ({
    data
}: ShowcaseProps) => {
    return (
        <div className="h-96 p-2">
            <div className="flex flex-row justify-center items-center w-full h-full rounded-3xl shadow-lg bg-slate-700 text-white">
            <h1>
                Test
            </h1>
            </div>
        </div>
    );
}

export default Showcase;